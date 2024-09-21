
<template>
  <Icon :iconName="'mortarboard-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mortarboard01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mortarboard-01'
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
