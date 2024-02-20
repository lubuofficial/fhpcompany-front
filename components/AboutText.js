import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: #00004d;
`;

const Textsize = styled.div`
  text-align: center;
  padding: 0 50px;
  margin: 10px auto;
  max-width: 60vw;
  color: #666;
`;

const Intro = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40%;
`;

const MapFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function AboutText() {
  return (
    <div>
      <Container>
        <h2>Fluid Hydro Power Company</h2>
      </Container>
      <Intro>
        <h3>
          Your trusted source for
          high-quality tractor spare parts in Thailand.
        </h3>
      </Intro>

      <Textsize>
        <p>
          At Fluid Hydro Power Company, we understand the importance of reliable
          and durable spare parts for your tractors. With years of experience in
          the industry, we serving customers across Thailand. Our extensive
          inventory includes a wide range of parts, from engine components to
          hydraulic systems, transmission parts, and more. Whatever your
          requirements may be, you can count on us to deliver the right parts,
          right on time.
        </p>
       <h3 style={{ color: '#00004d',  textAlign: 'left'}}>Contact us:</h3>
       <div style={{textAlign: 'left'}}>
       <p>Email: Fhpcompany@gmail.com </p>
       <p>Tel: 02-383-9400</p>
       </div>
      
      
        <div>
          <h3 style={{ color: '#00004d',  textAlign: 'left', marginBottom: '5px'  }}>Our Location:</h3>
          <p style={{textAlign: 'left'}}>99/95 Soi Phatthana Chumchon 1, Tambon Bang Kaeo, Amphoe Bang Phli, Chang Wat Samut Prakan 10540
</p>
          <MapContainer>
          <MapFrame
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3877.2676668748604!2d100.64724907629036!3d13.641475165671324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM4JzI5LjMiTiAxMDDCsDM5JzA3LjYiRQ!5e0!3m2!1sen!2sth!4v1708105982043!5m2!1sen!2sth"
            width="500"
            height="400"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></MapFrame>
          </MapContainer>
        </div>
      </Textsize>
    </div>
  );
}
