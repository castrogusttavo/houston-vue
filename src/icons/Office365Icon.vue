
<template>
  <Icon :iconName="'office-365'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Office365Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'office-365'
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
