
<template>
  <Icon :iconName="'office-chair'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OfficeChairIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'office-chair'
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
