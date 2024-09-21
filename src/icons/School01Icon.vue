
<template>
  <Icon :iconName="'school-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'School01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school-01'
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
