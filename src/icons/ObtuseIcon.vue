
<template>
  <Icon :iconName="'obtuse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ObtuseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'obtuse'
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
