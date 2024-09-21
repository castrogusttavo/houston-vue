
<template>
  <Icon :iconName="'star-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StarOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'star-off'
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
