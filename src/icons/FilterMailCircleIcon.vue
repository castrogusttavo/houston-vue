
<template>
  <Icon :iconName="'filter-mail-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilterMailCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'filter-mail-circle'
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
