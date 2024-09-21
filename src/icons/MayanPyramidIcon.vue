
<template>
  <Icon :iconName="'mayan-pyramid'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MayanPyramidIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mayan-pyramid'
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
