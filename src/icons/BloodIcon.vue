
<template>
  <Icon :iconName="'blood'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BloodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blood'
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
