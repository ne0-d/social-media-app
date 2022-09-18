import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (event) => {
    //using this our page will not be redirected to other page
    event.preventDefault();
    let UserData = formData;

    if (profileImage) {
      console.log("Inside profile image");
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImage) {
      console.log("Inside cover image");
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updateUser(params.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      size="55%"
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm authform">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Works at"
            className="infoInput"
            name="worksAt"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Lives in"
            className="infoInput"
            name="livesin"
            onChange={handleChange}
            value={formData.livesin}
          />
          <input
            type="text"
            placeholder="Country"
            className="infoInput"
            name="country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Relationship Status"
            className="infoInput"
            name="relationship"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="button infoButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
