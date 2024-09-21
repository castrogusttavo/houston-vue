
<template>
  <Icon :iconName="'star-face'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StarFaceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'star-face'
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
