
<template>
  <Icon :iconName="'upload-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Upload03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-03'
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
