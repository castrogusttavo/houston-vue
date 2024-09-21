
<template>
  <Icon :iconName="'angry-bird'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AngryBirdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'angry-bird'
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
