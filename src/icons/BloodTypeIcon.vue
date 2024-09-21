
<template>
  <Icon :iconName="'blood-type'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BloodTypeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blood-type'
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
