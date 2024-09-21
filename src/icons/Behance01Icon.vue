
<template>
  <Icon :iconName="'behance-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Behance01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'behance-01'
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
