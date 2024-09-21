
<template>
  <Icon :iconName="'hdr-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hdr01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hdr-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
