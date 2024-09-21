
<template>
  <Icon :iconName="'home-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-04'
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
