
<template>
  <Icon :iconName="'blood-bottle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BloodBottleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blood-bottle'
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
