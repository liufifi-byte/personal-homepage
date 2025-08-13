import React, { useState } from 'react';

const RoleSwitcher = ({ onRoleChange }) => {
    const [isPlanter, setIsPlanter] = useState(true);

    const handleRoleChange = () => {
        setIsPlanter(!isPlanter);
        onRoleChange(!isPlanter ? 'planter' : 'service_manager');
    };

    return (
        <div className="role-switcher">
            <button 
                className={`role-button ${isPlanter ? 'active' : ''}`} 
                onClick={handleRoleChange}
            >
                种植者
            </button>
            <button 
                className={`role-button ${!isPlanter ? 'active' : ''}`} 
                onClick={handleRoleChange}
            >
                服务机构管理者
            </button>
        </div>
    );
};

export default RoleSwitcher;