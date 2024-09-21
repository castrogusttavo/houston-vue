
<template>
  <Icon :iconName="'departement'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DepartementIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'departement'
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
