
<template>
  <Icon :iconName="'filter-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-remove'
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
