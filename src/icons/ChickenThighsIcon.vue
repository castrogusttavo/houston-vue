
<template>
  <Icon :iconName="'chicken-thighs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChickenThighsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chicken-thighs'
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
