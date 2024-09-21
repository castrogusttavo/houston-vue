
<template>
  <Icon :iconName="'university'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UniversityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'university'
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
