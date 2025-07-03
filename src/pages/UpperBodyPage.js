import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function UpperBodyPage() {
  const [users, setUsers] = useState([]);
  const [aantalToegevoegd, setAantalToegevoegd] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://codemaxx.nl/database/fetch_exercises.php');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

    function voegToeAanLijst(exercise) {
      document.addEventListener("DOMContentLoaded", () => {
        const checkmark = document.querySelector(".checkmark");
        setTimeout(() => {
          checkmark.style.animation = "rotateCheckmark 1s ease-in-out forwards";
        }, 500); // Delay before animation starts
      });
      const element = document.getElementById(`tegel-${exercise.id}`);
      document.styleSheets[0].insertRule(`tegel-${exercise.id}::before { content: 'Welcome! '; }`, 0);
      if (!aantalToegevoegd.includes(exercise.name)){
        setAantalToegevoegd([...aantalToegevoegd, exercise.name])
        element.style.color = 'green'
      }
      else {
        const updatedArray = [...aantalToegevoegd].filter(item => item !== exercise.name);
        setAantalToegevoegd(updatedArray)
        element.style.color = 'black'
      }
    }

    function oefeningenLatenZien(latenZien) {
      document.getElementById("teller").style.display = latenZien ? "block" : "none"
      // display
    }
  return (
    <>
      <Container fluid={true}>
        <h2 className='titel'>UpperBody exercises</h2>
        <Row className="exercise-grid">
          {users.map((exercise) => (
            <Col sm className="btn-container">
              <h3>{exercise.name}</h3>
              <span>{exercise.category}</span>
              <div className='button'>
                <div className="checkmark"></div>
                <div className='button-plus' onClick={()=>{voegToeAanLijst(exercise)}} id={`tegel-${exercise.id}`}></div>
              </div>

            </Col>
          ))}
        </Row>
      </Container>
      <div id="teller">
        <ul>
          {aantalToegevoegd.map((exercise) => (
            <li>{exercise}</li>
          ))}
        </ul>
      </div>
      <a
        id="ovalButton"
        href="/selected"
        // onClick={()=>{alert(`${aantalToegevoegd.length} oefeningen geselecteerd!`)}}
        onMouseOver={()=>{oefeningenLatenZien(true)}}
        onMouseOut={()=>{oefeningenLatenZien(false)}}
      >
        {aantalToegevoegd.length}
      </a>
    </>
  );
}

export default UpperBodyPage;
