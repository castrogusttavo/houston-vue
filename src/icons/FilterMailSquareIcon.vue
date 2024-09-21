
<template>
  <Icon :iconName="'filter-mail-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterMailSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-mail-square'
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
