
<template>
  <Icon :iconName="'flying-human'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlyingHumanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flying-human'
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
