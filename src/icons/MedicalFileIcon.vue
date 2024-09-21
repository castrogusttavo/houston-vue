
<template>
  <Icon :iconName="'medical-file'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedicalFileIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medical-file'
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
