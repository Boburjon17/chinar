
import * as React from 'react';
import "./questions.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = () =>{
    return (
        <div className='accordion-container' >
            <div className="accordion">
                <h1>ВОПРОСЫ КОТОРЫЕ ЗАДАЮТ НАМ ОЧЕНЬ ЧАСТО</h1>
                
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Какие материалы используются для производства мебели?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Мы используем высококачественные материалы, такие как натуральное дерево, металл, ротанг и экологически чистые ткани. Каждый материал подбирается в зависимости от типа мебели и её предназначения.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Какова гарантия на мебель?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              На всю нашу продукцию предоставляется гарантия от 3 до 5 лет в зависимости от изделия. Гарантия распространяется на дефекты производства и материалов.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Доставка: какие сроки и стоимость?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Доставка осуществляется в течение 3–7 рабочих дней в зависимости от вашего местоположения. Стоимость доставки рассчитывается индивидуально и зависит от объёма и адреса доставки
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Можно ли заказать мебель по индивидуальным размерам?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Да, мы предлагаем возможность изготовления мебели на заказ по индивидуальным размерам. Наши дизайнеры помогут вам разработать проект, соответствующий вашим пожеланиям.
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Как ухаживать за мебелью?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Для ухода за нашей мебелью используйте мягкую ткань и нейтральные моющие средства. Избегайте попадания прямых солнечных лучей и высокой влажности для продления срока службы.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        </div>
      )
}
export default Questions