import React from 'react';
import { CgFileDocument } from "react-icons/cg";

const ExperienceBox = ({ role, company, date, expKey }) => {
  const desc = {
    HueLogicsDesc: "Contributed to Okta Health’s RTM platform, enhancing physical therapy through real-time remote care tools. Built responsive interfaces with React.js and Tailwind CSS to support features like pain tracking and patient progress. Helped improve usability and enable CMS-compliant remote monitoring for therapists and patients.",    
    
    DihaariDesc: "Assisted in frontend development for internal tools with scalable, modular code. Collaborated in agile sprints with backend and UI/UX teams. Practiced reusable component development using React.js and REST APIs.",
    
    DihaariLink: "https://drive.google.com/file/d/1u6tTV2wzpTPDOIWx_b__4hTr3kIIOYbU/view?usp=sharing"
  };

  return (
    <div className='projectBox'>
      <div>
        {/* Company Name */}
        <p style={{ color: "#B66DF2", fontWeight: "bold", fontSize: "1.1rem" }}>{company}</p>
        
        {/* Role */}
        <h3 style={{ marginTop: "0.5rem", fontWeight: "600", fontSize: "1.05rem", color: "#ffffff" }}>{role}</h3>
        
        {/* Duration */}
        <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#bbbbbb", marginBottom: "0.75rem" }}>{date}</p>

        {/* Description */}
        <p style={{ fontSize: "0.9rem", color: "#dddddd", lineHeight: "1.5" }}>
          {desc[expKey]}
        </p>

        {/* Certificate Button */}
        {expKey === "DihaariDesc" && (
          <div className="mt-4">
            <a href={desc.DihaariLink} target='_blank' rel='noreferrer'>
              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#B66DF2',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  gap: '0.5rem',
                  marginTop: '2rem',
                }}
              >
                <CgFileDocument size={18} /> Internship Certificate
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceBox;
