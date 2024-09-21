
<template>
  <Icon :iconName="'galaxy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GalaxyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'galaxy'
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
