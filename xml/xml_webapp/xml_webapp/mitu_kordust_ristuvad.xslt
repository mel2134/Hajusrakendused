<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output encoding="UTF-8" method="html" indent="yes" />
	<xsl:template match="/">
		<table>
			<tr>
				<th>Inimeste vanuste vahe</th>
				<xsl:for-each select="/inimesed/inimene">
					<th>
						<xsl:value-of select="
 concat(eesnimi, ', ', synd)"></xsl:value-of>
					</th>
				</xsl:for-each>
			</tr>
			<xsl:for-each select="/inimesed/inimene">
				<tr>
					<xsl:variable name="v2limine" select="." />
					<td>
						<xsl:value-of select="eesnimi" />
					</td>
					<xsl:for-each select="/inimesed/inimene">
						<td>
							<xsl:value-of select="concat(perenimi, ' ja ', $v2limine/perenimi)" />
						</td>
					</xsl:for-each>
				</tr>
			</xsl:for-each>
		</table>
	</xsl:template>
</xsl:stylesheet>