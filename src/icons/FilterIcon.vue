
<template>
  <Icon :iconName="'filter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter'
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
