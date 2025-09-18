<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output encoding="UTF-8" method="text" />
    <xsl:template match="/">
		registrinumber:<xsl:value-of select="/autod/auto[1]/registrinumber" />
	</xsl:template>
</xsl:stylesheet>