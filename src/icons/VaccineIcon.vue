
<template>
  <Icon :iconName="'vaccine'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VaccineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vaccine'
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
