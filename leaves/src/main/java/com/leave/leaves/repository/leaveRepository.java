package com.leave.leaves.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leave.leaves.model.leave;

public interface leaveRepository extends JpaRepository<leave,Long>{
    
}
