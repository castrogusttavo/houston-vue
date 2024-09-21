
<template>
  <Icon :iconName="'home-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-05'
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
