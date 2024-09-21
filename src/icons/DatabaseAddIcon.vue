
<template>
  <Icon :iconName="'database-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-add'
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
