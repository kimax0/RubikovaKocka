import { Col, Container, Image, ListGroup, Row } from "react-bootstrap"

const Guide = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Guide</h1>
          <h2>Preparation</h2>
          <p>
            In the next section, I will explain the most basic things you need to know in order to follow this 
            guide. By the most basic, I mean the standard notation for moves and defining algorithms.
          </p>
          <h3>Notation</h3>
          <p>
            For this guide, I will use the standard notation for describing moves, that is, rotations of the sides. 
            While holding the cube so that one of its sides (in this guide, it will be the red side) is facing 
            directly toward you:
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6 col-12">
          <ListGroup>
            <ListGroup.Item>
              <li>R stands for rotating the right face clockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>L stands for rotating the left face clockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=L&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>U stands for rotating the upper face clockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>D stands for rotating the bottom face clockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=D&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>F stands for rotating the front face clockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>B stands for rotating the back face clockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=B&hover=1&flags=showalg" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="col-md-6 col-12">
          <ListGroup>
            <ListGroup.Item>
              <li>R' stands for rotating the right face counterclockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>L' stands for rotating the left face counterclockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=L'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>U' stands for rotating the upper face counterclockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>D' stands for rotating the bottom face counterclockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=D'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>F' stands for rotating the front face counterclockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F'&hover=1&flags=showalg" />
            </ListGroup.Item>
            <ListGroup.Item>
              <li>B' stands for rotating the back face counterclockwise</li>
              <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=B'&hover=1&flags=showalg" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
        <p className="text-muted">
          If the number 2 follows a letter, it means that the move is repeated twice. R2 then means rotating the 
          right face in any direction twice. R2 and R'2 rotate the right face by 180 degrees, so the direction does 
          not matter, and it is written in the shorter form R2. R3 also exists but achieves the same result as R', 
          only R' is shorter by 2 moves. R4 achieves nothing because the face is rotated 360 degrees. The same 
          applies to L, U, D, F, and B moves.
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Algorithms</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <p>
            In cube solving, an algorithm is any set of previously defined moves. Although any set of moves is 
            technically an algorithm, most of them are useless. However, there are algorithms that can predictably 
            swap the positions of certain pieces without affecting other parts. Here, you can see what an algorithm 
            looks like that will swap the positions of 3 corners on the top face, without affecting the 
            front-top-right corner (since the red color is facing us) or the rest of the cube.
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20L'%20U%20R'%20U'%20L&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <h2>A guide for solving the 3x3 Rubik's cube</h2>
      </Row>
      <Row>
        <Col className="col-lg-6 col-12">
          <h3>White cross</h3>
          <p>
            There are no special algorithms for solving the white cross, as it is the first step, and there is 
            no need to preserve the state of other parts when they are out of place anyway. Solving the white 
            cross is a good opportunity to familiarize yourself with the cube and the changes each move brings. 
            It might seem contradictory to say this in a guide, but try to solve the white cross on your own so 
            that the colors align as in the first image; the second image is an example of an incorrect white cross.
          </p>
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <Image alt="Primer pravilnog krsta." src="/uputstvo/krst_dobar.svg" width="250" height="250" />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <Image alt="Primer pravilnog krsta." src="/uputstvo/krst_los.svg" width="250" height="250" />
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <h3>White corners</h3>
          <p>
            Most people can intuitively solve the white corners, but this can become complicated toward the end 
            when there is a risk of displacing one corner while solving another. That is why there are short 
            algorithms for this step. It is important to note that the corners must be placed so that, for example, 
            a corner with white, green, and orange colors ends up between the white, green, and orange centers, 
            and between the white-orange and white-green edges. There are three algorithms for placing edges when 
            the target location for the edge is in the front-top-right corner, and the edge itself is directly 
            below in the front-bottom-right corner. These algorithms are as follows.
          </p>
        </Col>
        <Col className="col-md-4 col-sm-6 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R'%20D'%20R&colored=U*%20F%20R%20L%20B%20D&hover=1&flags=showalg&colors=F:o%20U:w%20R:g%20B:r%20L:b%20D:y" />
        </Col>
        <Col className="col-md-4 col-sm-6 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F%20D%20F'&colored=U*%20F%20R%20L%20B%20D&hover=1&flags=showalg&colors=F:o%20U:w%20R:g%20B:r%20L:b%20D:y" />
        </Col>
        <Col className="col-md-4 col-sm-6 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=F%20L%20D2%20L'%20F'&colored=U*%20F%20R%20L%20B%20D&hover=1&flags=showalg&colors=F:o%20U:w%20R:g%20B:r%20L:b%20D:y" />
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-6 col-12">
          <h3>Second layer</h3>
          <p>
            At this stage, the cube should have the white face solved, surrounded by a ring or a layer of colors 
            that match the color of their center. Now, it is necessary to fill in the 4 remaining edges that do 
            not have yellow on them so that around the solved white face, there are 2 layers of solved colors, 
            leaving only the yellow face unsolved. There are two algorithms for this, differing based on whether 
            we are "inserting to the left" or "inserting to the right." You need to choose any edge without yellow 
            on it, place it on the face looking toward you, and then rotate the bottom two layers until they align 
            with the color of the edge facing you. Then, look at the other color of the chosen edge, and depending 
            on whether that color is currently on the left or right, execute the algorithm for inserting to the left 
            or to the right. If an edge is "stuck" in the wrong position or is incorrectly oriented, simply insert 
            an edge with yellow on it to push out the one you need. The algorithms are as follows.
          </p>
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <p>Inserting into left</p>
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U'%20L'%20U%20L%20U%20F%20U'%20F'&colored=D*%20F%20R%20L%20B%20D%20FR%20FL%20BL%20BR&tweaks=X:LF&hover=1&flags=showalg&colors=F:o%20U:y%20R:b%20B:r%20L:g%20D:w" />
        </Col>
        <Col className="col-lg-3 col-sm-6 col-12">
          <p>Inserting into right</p>
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20R'%20U'%20F'%20U%20F&colored=D*%20F%20R%20L%20B%20D%20FR%20FL%20BL%20BR&tweaks=X:RF&hover=1&flags=showalg&colors=F:o%20U:y%20R:b%20B:r%20L:g%20D:w" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Yellow cross</h3>
          <p>
            This is the furthest someone can get using pure intuition because now algorithms become rotations of 
            parts and stop being about avoiding complex sections, as two-thirds of the cube are already solved. 
            At this stage, it is only important to achieve a yellow cross on the yellow face; it doesn’t matter if 
            the side colors match as was the case with the white cross. For this step, you only need to know one 
            algorithm, but you must understand how to orient the cube so that the algorithm is effective. The 
            possible configurations we can have on the yellow edges are: "Dot" (only the center faces upward, all 
            edges face sideways), "Letter L" (the center and two adjacent edges face upward, the other two adjacent 
            edges face sideways), "Line" (the center and two edges on opposite sides face upward, the other two 
            opposite edges face sideways), and "Cross" (the center and all edges face upward). The algorithm and 
            the correct orientation of the cube for each shape on the yellow face can be seen each time the cube 
            is turned (feel free to pause the animation and proceed step by step).
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="400" src="https://ruwix.com/widget/3d/?alg=F%20R%20U%20R'%20U'%20F'%20y2%20F%20R%20U%20R'%20U'%20F'%20y2%20F%20R%20U%20R'%20U'%20F'&colored=D*%20F*/me%20R*/me%20L*/me%20B*/me%20U/m&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Yellow edges</h3>
          <p>
            Now we need to make sure that the edges of the cross align with all the surrounding colors. There is 
            an algorithm for this that will swap the positions of the front and left yellow edges. Adjust the 
            orientation of the cube to match the situation on the cube. It is important to always have in mind which 
            two edges are being swapped.
          </p>
        </Col>
        <Col  className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=R%20U%20R'%20U%20R%20U2%20R'%20U&colored=D*%20F*/me%20R*/me%20L*/me%20B*/me%20U/m&tweaks=X:FU%20X:LU&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Placing yellow corners</h3>
          <p>
            This is another step where the orientation of the cube is more important than the algorithm itself, as 
            only 4 pieces remain unsolved and there are many things to keep track of. This algorithm swaps the 
            positions of 3 corners on the yellow face, with the corner that is top-right relative to the front view 
            remaining unchanged. It is important to place the corner that is in its correct position at this 
            location, regardless of whether it is rotated correctly. Once we "lock" that corner in place, we can 
            repeat the algorithm until the remaining three pieces are placed correctly. If none of the corners are 
            in their correct positions, execute the algorithm once in any orientation.
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
          <iframe width="250" height="380" src="https://ruwix.com/widget/3d/?alg=U%20R%20U'%20L'%20U%20R'%20U'%20L&setupmoves=U2%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D&tweaks=X:UFL%20X:UBR%20X:UBL&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-9 col-lg-8 col-md-7 col-12">
          <h3>Orienting yellow corners</h3>
          <p>
            In this step, it is important to know only one algorithm, which should be repeated two or four times 
            for each edge that is not properly oriented. This is the part where most mistakes happen because there 
            are no safe places between each execution of the algorithm. Once you start this step, you must stay 
            focused and be careful. It is crucial not to twist the cube in your hands. Just place the misoriented 
            corner in the top-right corner from the front and repeat the algorithm until the corner is oriented so 
            that the yellow is facing up. Once you finish with one corner, bring the other one to the top-right 
            position using only U and U' moves (and U2, of course). Once you successfully orient all the corners, 
            the bottom part of the cube will return to its solved state. Again, I emphasize: do not lose focus and 
            make sure not to twist the cube in your hands.
          </p>
        </Col>
        <Col className="col-xl-3 col-lg-4 col-md-5 col-12">
        <iframe width="250" height="410" src="https://ruwix.com/widget/3d/?alg=U2%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U%20R'%20D'%20R%20D%20R'%20D'%20R%20D%20U2&hover=1&flags=showalg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">THE CUBE IS SOLVED!</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Guide