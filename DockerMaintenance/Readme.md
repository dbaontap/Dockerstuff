# Docker Maintenance
This file is specifically written to help manage my Docker.qcow2 file issue. If you are running iOS, then Docker
does not do a good job of managing the space consumed by the Docker.qcow2 file. The script with you are free to 
fork and modify performs the following:

 * Archive Docker Images
 * Stops Docker
 * Deletes qcow2 file
 * Restarts Docker
 * Restores Archived Docker Images
