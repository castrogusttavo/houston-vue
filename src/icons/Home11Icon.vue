
<template>
  <Icon :iconName="'home-11'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home11Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-11'
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
