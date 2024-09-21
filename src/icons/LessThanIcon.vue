
<template>
  <Icon :iconName="'less-than'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LessThanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'less-than'
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
