
<template>
  <Icon :iconName="'chair-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chair01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chair-01'
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
