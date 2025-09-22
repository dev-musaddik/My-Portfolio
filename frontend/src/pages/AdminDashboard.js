import React, { useState, useEffect } from "react";
import { axiosInstance } from "../api/axiosInstance";
import {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createProject,
  updateProject,
  deleteProject,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../api/adminApi";
import ProjectForm from "../components/ProjectForm";
import SkillForm from "../components/SkillForm";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null); // Defining editingProjectId state
  const [editingSkillId, setEditingSkillId] = useState(null); // Defining editingSkillId state

  useEffect(() => {
    fetchBlogs();
    fetchProjects();
    fetchSkills();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blog");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axiosInstance.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  const fetchSkills = async () => {
    try {
      const res = await axiosInstance.get("/skills");
      setSkills(res.data);
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  };

  const handleBlogFormChange = (e) => {
    if (e.target.name === "image") {
      setBlogForm({ ...blogForm, image: e.target.files[0] });
    } else {
      setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blogForm.title);
    formData.append("content", blogForm.content);
    if (blogForm.image) {
      formData.append("image", blogForm.image);
    }

    try {
      if (editingBlogId) {
        await updateBlogPost(editingBlogId, formData);
        setEditingBlogId(null);
      } else {
        await createBlogPost(formData);
      }
      setBlogForm({ title: "", content: "", image: null });
      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
    }
  };

  const handleEditBlog = (blog) => {
    setBlogForm({ title: blog.title, content: blog.content, image: null });
    setEditingBlogId(blog._id);
  };

  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlogPost(id);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // Project Management Functions
  const handleProjectSave = async (formData) => {
    try {
      if (editingProjectId) {
        await updateProject(editingProjectId, formData);
        setEditingProjectId(null); // Reset the editing state
      } else {
        await createProject(formData);
      }
      fetchProjects();
    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  const handleEditProject = (project) => {
    setEditingProjectId(project._id); // Set the editing project ID
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  // Skill Management Functions
  const handleSkillSave = async (skillData) => {
    try {
      if (editingSkillId) {
        await updateSkill(editingSkillId, skillData);
        setEditingSkillId(null); // Reset the editing state
      } else {
        await createSkill(skillData);
      }
      fetchSkills();
    } catch (err) {
      console.error("Error saving skill:", err);
    }
  };

  const handleEditSkill = (skill) => {
    setEditingSkillId(skill._id); // Set the editing skill ID
  };

  const handleDeleteSkill = async (id) => {
    try {
      await deleteSkill(id);
      fetchSkills();
    } catch (err) {
      console.error("Error deleting skill:", err);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-semibold mb-8">Admin Dashboard</h2>
        <nav className="space-y-6">
          <a href="#blogs" className="hover:bg-gray-700 p-3 block rounded-md">
            Blogs
          </a>
          <a
            href="#projects"
            className="hover:bg-gray-700 p-3 block rounded-md"
          >
            Projects
          </a>
          <a href="#skills" className="hover:bg-gray-700 p-3 block rounded-md">
            Skills
          </a>
        </nav>
      </div>

      <div className="w-3/4 p-6 bg-gray-100">
        {/* Blog Management */}
        <section className="mb-8" id="blogs">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Blog Management
          </h2>
          <form
            onSubmit={handleBlogSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="title" className="block text-lg">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={blogForm.title}
                onChange={handleBlogFormChange}
                className="w-full mt-2 p-3 border rounded-md"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-lg">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                value={blogForm.content}
                onChange={handleBlogFormChange}
                className="w-full mt-2 p-3 border rounded-md"
                placeholder="Enter blog content"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block text-lg">
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleBlogFormChange}
                className="w-full mt-2 p-3 border rounded-md"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {editingBlogId ? "Update Blog" : "Create Blog"}
              </button>
              {editingBlogId && (
                <button
                  type="button"
                  onClick={() => setEditingBlogId(null)}
                  className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {/* Blog List */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Existing Blogs
            </h3>
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-sm"
              >
                <h4 className="text-lg">{blog.title}</h4>
                <div>
                  <button
                    onClick={() => handleEditBlog(blog)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Management */}
        <section className="mb-8" id="projects">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Management
          </h2>
          <ProjectForm
            project={
              editingProjectId
                ? projects.find((p) => p._id === editingProjectId)
                : null
            }
            onSave={handleProjectSave}
            onCancel={() => setEditingProjectId(null)}
          />
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Existing Projects
            </h3>
            {projects.map((project) => (
              <div
                key={project._id}
                className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-sm"
              >
                <h4 className="text-lg">{project.title}</h4>
                <div>
                  <button
                    onClick={() => handleEditProject(project)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skill Management */}
        <section id="skills">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Skill Management
          </h2>
          <SkillForm
            skill={
              editingSkillId
                ? skills.find((s) => s._id === editingSkillId)
                : null
            }
            onSave={handleSkillSave}
            onCancel={() => setEditingSkillId(null)}
          />
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Existing Skills
            </h3>
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-sm"
              >
                <h4 className="text-lg">
                  {skill.name} ({skill.level}%)
                </h4>
                <div>
                  <button
                    onClick={() => handleEditSkill(skill)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSkill(skill._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
