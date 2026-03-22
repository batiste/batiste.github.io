import pymupdf   # PyMuPDF

def extract_pdf_to_txt(input_pdf, output_txt):
    try:
        # Open the PDF document
        doc = pymupdf.open(input_pdf)
        full_text = []

        print(f"Processing: {input_pdf}...")

        for page_num in range(len(doc)):
            # Load the page
            page = doc.load_page(page_num)
            
            # Extract text using 'text' blocks to maintain reasonable flow
            text = page.get_text("text")
            
            # Optional: Add a page marker for clarity in the TXT file
            full_text.append(f"--- Page {page_num + 1} ---")
            full_text.append(text)

        # Join everything and write to a file
        with open(output_txt, "w", encoding="utf-8") as f:
            f.write("\n".join(full_text))

        print(f"Success! Text saved to: {output_txt}")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        doc.close()

# Usage
extract_pdf_to_txt("90x140-rules-de.pdf", "output_result.txt")