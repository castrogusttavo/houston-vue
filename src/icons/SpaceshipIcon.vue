
<template>
  <Icon :iconName="'spaceship'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpaceshipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spaceship'
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
