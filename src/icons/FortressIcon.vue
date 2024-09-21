
<template>
  <Icon :iconName="'fortress'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FortressIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fortress'
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
