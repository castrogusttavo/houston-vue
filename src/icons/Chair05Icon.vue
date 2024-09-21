
<template>
  <Icon :iconName="'chair-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chair05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chair-05'
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
