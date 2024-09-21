
<template>
  <Icon :iconName="'oval'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OvalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'oval'
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
