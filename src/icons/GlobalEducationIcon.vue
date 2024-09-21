
<template>
  <Icon :iconName="'global-education'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlobalEducationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'global-education'
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
