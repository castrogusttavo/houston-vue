
<template>
  <Icon :iconName="'home-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-03'
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
