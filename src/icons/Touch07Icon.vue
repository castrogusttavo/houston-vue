
<template>
  <Icon :iconName="'touch-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-07'
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
