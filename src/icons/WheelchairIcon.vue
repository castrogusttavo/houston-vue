
<template>
  <Icon :iconName="'wheelchair'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WheelchairIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wheelchair'
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
